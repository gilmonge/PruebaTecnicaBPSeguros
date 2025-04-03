using EN.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Seguridad.Servicios.Usuario;
using System.Text;
using Utilidades.Servicios;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<dbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("dbSQL")
    )
);

builder.Services.AddScoped<GenerarMD5Password>();
builder.Services.AddScoped<TokenJWTGenerar>();

builder.Services.AddScoped<UsuarioAgregar>();
builder.Services.AddScoped<UsuarioCambiarPassword>();
builder.Services.AddScoped<UsuarioEliminar>();
builder.Services.AddScoped<UsuarioLogin>();
builder.Services.AddScoped<UsuarioObtenerDetalle>();
builder.Services.AddScoped<UsuarioObtenerLista>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("*", policy =>
    {
        policy
            .SetIsOriginAllowed(origin => true)
            .AllowAnyHeader()
            .AllowAnyMethod()
        .AllowCredentials();
    });
});


builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options =>
{
    IConfigurationSection configurationsSection = builder.Configuration.GetSection("JwtSettings");
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = configurationsSection["Issuer"],
        ValidAudience = configurationsSection["Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configurationsSection["SecretKey"]!))
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("*");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
