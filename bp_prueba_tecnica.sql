USE [master]
GO
/****** Object:  Database [bp_prueba_tecnica]    Script Date: 03/04/2025 07:34:22 a. m. ******/
CREATE DATABASE [bp_prueba_tecnica]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'bp_prueba_tecnica', FILENAME = N'/var/opt/mssql/data/bp_prueba_tecnica.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'bp_prueba_tecnica_log', FILENAME = N'/var/opt/mssql/data/bp_prueba_tecnica_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [bp_prueba_tecnica] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [bp_prueba_tecnica].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [bp_prueba_tecnica] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ARITHABORT OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [bp_prueba_tecnica] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [bp_prueba_tecnica] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET  DISABLE_BROKER 
GO
ALTER DATABASE [bp_prueba_tecnica] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [bp_prueba_tecnica] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET RECOVERY FULL 
GO
ALTER DATABASE [bp_prueba_tecnica] SET  MULTI_USER 
GO
ALTER DATABASE [bp_prueba_tecnica] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [bp_prueba_tecnica] SET DB_CHAINING OFF 
GO
ALTER DATABASE [bp_prueba_tecnica] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [bp_prueba_tecnica] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [bp_prueba_tecnica] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [bp_prueba_tecnica] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [bp_prueba_tecnica] SET QUERY_STORE = OFF
GO
USE [bp_prueba_tecnica]
GO
/****** Object:  Table [dbo].[Cliente_Cliente]    Script Date: 03/04/2025 07:34:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente_Cliente](
	[CedulaAsegurado] [varchar](100) NOT NULL,
	[Nombre] [varchar](60) NULL,
	[PrimerApellido] [varchar](60) NULL,
	[SegundoApellido] [varchar](60) NULL,
	[TipoPersona] [varchar](50) NULL,
	[FechaNacimiento] [datetime] NULL,
	[EstaEliminado] [bit] NULL,
 CONSTRAINT [PK_Persona_Persona] PRIMARY KEY CLUSTERED 
(
	[CedulaAsegurado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Poliza_Poliza]    Script Date: 03/04/2025 07:34:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Poliza_Poliza](
	[Id] [varchar](37) NOT NULL,
	[NumeroPoliza] [varchar](50) NULL,
	[TipoPoliza] [varchar](50) NULL,
	[CedulaAsegurado] [varchar](100) NULL,
	[MontoAsegurado] [decimal](18, 5) NULL,
	[FechaVencimiento] [datetime] NULL,
	[FechaEmision] [datetime] NULL,
	[Coberturas] [varchar](50) NULL,
	[EstadoPoliza] [varchar](50) NULL,
	[Prima] [decimal](18, 5) NULL,
	[Periodo] [varchar](50) NULL,
	[FechaInclusion] [datetime] NULL,
	[Aseguradora] [varchar](50) NULL,
	[EstaEliminado] [bit] NULL,
 CONSTRAINT [PK_Poliza_Poliza] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seguridad_Usuario]    Script Date: 03/04/2025 07:34:23 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seguridad_Usuario](
	[Id] [varchar](37) NOT NULL,
	[Usuario] [varchar](150) NOT NULL,
	[Password] [varchar](150) NOT NULL,
	[Codigo] [varchar](13) NOT NULL,
	[EstaEliminado] [bit] NOT NULL,
 CONSTRAINT [PK_Seguridad_Usuario] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[Cliente_Cliente] ([CedulaAsegurado], [Nombre], [PrimerApellido], [SegundoApellido], [TipoPersona], [FechaNacimiento], [EstaEliminado]) VALUES (N'304920734', N'Gilberth', N'Monge', N'', N'personaFisica', CAST(N'1996-02-05T06:00:00.000' AS DateTime), 0)
INSERT [dbo].[Cliente_Cliente] ([CedulaAsegurado], [Nombre], [PrimerApellido], [SegundoApellido], [TipoPersona], [FechaNacimiento], [EstaEliminado]) VALUES (N'305550333', N'Tanjiro', N'Kamado', N'Ficticio', N'personaFisica', CAST(N'2000-02-12T06:00:00.000' AS DateTime), 0)
INSERT [dbo].[Cliente_Cliente] ([CedulaAsegurado], [Nombre], [PrimerApellido], [SegundoApellido], [TipoPersona], [FechaNacimiento], [EstaEliminado]) VALUES (N'346505460', N'dsfdsfdsf', N'sdfsdfsdf', NULL, N'personaFisica', CAST(N'2025-04-08T06:00:00.000' AS DateTime), 1)
INSERT [dbo].[Cliente_Cliente] ([CedulaAsegurado], [Nombre], [PrimerApellido], [SegundoApellido], [TipoPersona], [FechaNacimiento], [EstaEliminado]) VALUES (N'35012165135', N'dfgdfg', N'dfgdfg', NULL, N'personaFisica', CAST(N'2024-12-29T06:00:00.000' AS DateTime), 1)
INSERT [dbo].[Cliente_Cliente] ([CedulaAsegurado], [Nombre], [PrimerApellido], [SegundoApellido], [TipoPersona], [FechaNacimiento], [EstaEliminado]) VALUES (N'4545454545', N'dsfsdf', N'sdfsdf', NULL, N'personaFisica', CAST(N'2025-03-30T06:00:00.000' AS DateTime), 1)
GO
INSERT [dbo].[Poliza_Poliza] ([Id], [NumeroPoliza], [TipoPoliza], [CedulaAsegurado], [MontoAsegurado], [FechaVencimiento], [FechaEmision], [Coberturas], [EstadoPoliza], [Prima], [Periodo], [FechaInclusion], [Aseguradora], [EstaEliminado]) VALUES (N'2ccd02b7-b381-4390-84af-327f8c38aa07', N'ewrwer', N'salud', N'304920734', CAST(2342342.00000 AS Decimal(18, 5)), CAST(N'2025-03-31T06:00:00.000' AS DateTime), CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'A,C,D', N'activa', CAST(3242343.00000 AS Decimal(18, 5)), N'mensual', CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'assa', 0)
INSERT [dbo].[Poliza_Poliza] ([Id], [NumeroPoliza], [TipoPoliza], [CedulaAsegurado], [MontoAsegurado], [FechaVencimiento], [FechaEmision], [Coberturas], [EstadoPoliza], [Prima], [Periodo], [FechaInclusion], [Aseguradora], [EstaEliminado]) VALUES (N'71ba2efc-c40e-4eb8-a3c9-4ddc38ea4222', N'kjsdhfsdfsdfsdf', N'automovil', N'305550333', CAST(135123.00000 AS Decimal(18, 5)), CAST(N'2025-05-03T06:00:00.000' AS DateTime), CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'A,B', N'activa', CAST(1500.00000 AS Decimal(18, 5)), N'bimestral', CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'qualitas', 0)
INSERT [dbo].[Poliza_Poliza] ([Id], [NumeroPoliza], [TipoPoliza], [CedulaAsegurado], [MontoAsegurado], [FechaVencimiento], [FechaEmision], [Coberturas], [EstadoPoliza], [Prima], [Periodo], [FechaInclusion], [Aseguradora], [EstaEliminado]) VALUES (N'83c1b1cb-5cf0-4cb7-b0bf-7efb4e0ce686', N'sdfsdfsd', N'automovil', N'304920734', CAST(23432.00000 AS Decimal(18, 5)), CAST(N'2025-03-31T06:00:00.000' AS DateTime), CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'dfsfsdfsdf', N'pendientePago', CAST(324234234.00000 AS Decimal(18, 5)), N'bimestral', CAST(N'2025-04-01T06:00:00.000' AS DateTime), N'mapfre', 1)
GO
INSERT [dbo].[Seguridad_Usuario] ([Id], [Usuario], [Password], [Codigo], [EstaEliminado]) VALUES (N'1ad141e8-400d-495a-aae8-0a9b26f3a670', N'uwsuario@ajkhf.com', N'37C9A4EC4A7FD303FC1D1A5B84E7FB93', N'2a816bd9a0454', 0)
INSERT [dbo].[Seguridad_Usuario] ([Id], [Usuario], [Password], [Codigo], [EstaEliminado]) VALUES (N'5f1e3b2f-c056-4038-98dc-3ab7dd85ea1c', N'user@mail1.com', N'10ECD3DA867C5AE6D168A41F0723CB41', N'e0b103bc5e264', 1)
INSERT [dbo].[Seguridad_Usuario] ([Id], [Usuario], [Password], [Codigo], [EstaEliminado]) VALUES (N'cb429bb1-7264-45c3-b2fa-8f5c0972fd08', N'video@mail.com', N'13BEDC2FE5D2B56C9F8D517AE9BF05E8', N'10a792ecebd54', 0)
INSERT [dbo].[Seguridad_Usuario] ([Id], [Usuario], [Password], [Codigo], [EstaEliminado]) VALUES (N'ea2319e8-f4ba-40fc-8079-dae5fee91cf5', N'gilberth.monge@outlook.com', N'AB9A5F0CFB7C4C923549912EDE6E8631', N'397004967e024', 0)
GO
USE [master]
GO
ALTER DATABASE [bp_prueba_tecnica] SET  READ_WRITE 
GO
