using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace EN.Models;

public partial class dbContext : DbContext
{
    public dbContext(DbContextOptions<dbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cliente_Cliente> Cliente_Cliente { get; set; }

    public virtual DbSet<Poliza_Poliza> Poliza_Poliza { get; set; }

    public virtual DbSet<Seguridad_Usuario> Seguridad_Usuario { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cliente_Cliente>(entity =>
        {
            entity.HasKey(e => e.CedulaAsegurado).HasName("PK_Persona_Persona");

            entity.Property(e => e.CedulaAsegurado)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.FechaNacimiento).HasColumnType("datetime");
            entity.Property(e => e.Nombre)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.PrimerApellido)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.SegundoApellido)
                .HasMaxLength(60)
                .IsUnicode(false);
            entity.Property(e => e.TipoPersona)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Poliza_Poliza>(entity =>
        {
            entity.Property(e => e.Id)
                .HasMaxLength(37)
                .IsUnicode(false);
            entity.Property(e => e.Aseguradora)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.CedulaAsegurado)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Coberturas)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.EstadoPoliza)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FechaEmision).HasColumnType("datetime");
            entity.Property(e => e.FechaInclusion).HasColumnType("datetime");
            entity.Property(e => e.FechaVencimiento).HasColumnType("datetime");
            entity.Property(e => e.MontoAsegurado).HasColumnType("decimal(18, 5)");
            entity.Property(e => e.NumeroPoliza)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Periodo)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Prima).HasColumnType("decimal(18, 5)");
            entity.Property(e => e.TipoPoliza)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Seguridad_Usuario>(entity =>
        {
            entity.Property(e => e.id)
                .HasMaxLength(37)
                .IsUnicode(false);
            entity.Property(e => e.Codigo)
                .HasMaxLength(13)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Usuario)
                .HasMaxLength(150)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
