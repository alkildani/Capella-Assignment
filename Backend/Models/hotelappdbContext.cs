using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Backend.Models
{
    public partial class hotelappdbContext : DbContext
    {
        public hotelappdbContext()
        {
        }

        public hotelappdbContext(DbContextOptions<hotelappdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Hotel> Hotels { get; set; }
        public virtual DbSet<Location> Locations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(localdb)\\LocalHotelDb;Database=hotel-app-db;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Hotel>(entity =>
            {
                entity.HasKey(e => e.Name);

                entity.ToTable("hotels");

                entity.Property(e => e.Name)
                    .HasMaxLength(70)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ImageUrl)
                    .HasColumnType("image")
                    .HasColumnName("imageURL");

                entity.Property(e => e.Location)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.NumOfStars).HasColumnName("numOfStars");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Rate).HasColumnName("rate");

                entity.HasOne(d => d.LocationNavigation)
                    .WithMany(p => p.Hotels)
                    .HasForeignKey(d => d.Location)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_hotels_locations");
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.HasKey(e => e.Location1);

                entity.ToTable("locations");

                entity.Property(e => e.Location1)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("location");

                entity.Property(e => e.Id).HasColumnName("id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
