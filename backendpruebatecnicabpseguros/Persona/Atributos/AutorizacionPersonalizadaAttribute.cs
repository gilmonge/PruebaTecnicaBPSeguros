using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Persona.Atributos
{
    public class AutorizacionPersonalizadaAttribute : AuthorizeAttribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            if (context != null)
            {
                string? authorizationHeader = context.HttpContext.Request.Headers["Authorization"][0];
                if (string.IsNullOrEmpty(authorizationHeader))
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                if (!authorizationHeader.StartsWith("Bearer ") && !authorizationHeader.StartsWith("bearer "))
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                // Extraer el token JWT del encabezado de autorización, divide por espacio y obtener el segundo elemento
                string token = authorizationHeader.Split(' ')[1];

                // Valida el token
                JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

                // Obtiene el contexto de la solicitud HTTP y el servicio de configuración
                HttpContext httpContext = context.HttpContext;
                IConfiguration configuration = httpContext.RequestServices.GetRequiredService<IConfiguration>();
                IConfigurationSection configurationsSection = configuration.GetSection("JwtSettings");

                // Configura los parámetros de validación del token
                TokenValidationParameters tokenValidationParameters = new TokenValidationParameters
                {
                    // Setea la clave secreta para validar el token
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configurationsSection["SecretKey"]!)),

                    // Validar el emisor y las reclamaciones de la audiencia
                    ValidateIssuer = true,
                    ValidIssuer = configurationsSection["Issuer"],

                    ValidateAudience = true,
                    ValidAudience = configurationsSection["Audience"]
                };

                // Validar que el token sea correcto
                try
                {
                    tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken validatedToken);
                }
                catch (Exception)
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }

                // Leer el token y obtener la reclamación de rol para saber si el usuario tiene permisos
                var jwtToken = tokenHandler.ReadJwtToken(token);
                if (jwtToken != null)
                {
                    return;
                }
                else
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }
            }
        }
    }
}
