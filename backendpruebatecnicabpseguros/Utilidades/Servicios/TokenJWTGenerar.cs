using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Utilidades.Servicios
{
    public class TokenJWTGenerar
    {
        private readonly string? _SecretKey;
        private readonly string? _Issuer;
        private readonly string? _Audience;

        public TokenJWTGenerar(IConfiguration config)
        {
            var configurationsSection = config.GetSection("JwtSettings");
            _SecretKey = configurationsSection["SecretKey"];
            _Issuer = configurationsSection["Issuer"];
            _Audience = configurationsSection["Audience"];
        }
        public string GenerarToken(Dictionary<string, string> userClaims)
        {
            TimeSpan expiration = TimeSpan.FromHours(6);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_SecretKey!));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>{
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            foreach (var claim in userClaims)
            {
                claims.Add(new Claim(claim.Key, claim.Value));
            }

            var token = new JwtSecurityToken(
                _Issuer,
                _Audience,
                claims,
                expires: DateTime.Now.Add(expiration),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
