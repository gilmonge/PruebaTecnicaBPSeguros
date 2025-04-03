using EN.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Poliza.Servicios.Poliza;
using System.Text;

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

builder.Services.AddScoped<PolizaEditarAgregar>();
builder.Services.AddScoped<PolizaEliminar>();
builder.Services.AddScoped<PolizaObtenerDetalle>();
builder.Services.AddScoped<PolizaObtenerLista>();
builder.Services.AddScoped<PolizaConteoActivos>();

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
