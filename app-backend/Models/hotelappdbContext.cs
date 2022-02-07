using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace app_backend.Models
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
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            
        }

        
    }
}
