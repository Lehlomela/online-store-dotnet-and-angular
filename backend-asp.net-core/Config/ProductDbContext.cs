
using Microsoft.EntityFrameworkCore;
using Models;

namespace Config
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<Product> Products { get; set; }

        public ApplicationDbContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        =>
        // see supported frameworks
            optionsBuilder.
            UseNpgsql("Host=localhost;Database=online_store01;Username=online-store;Password=online-store");


        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Fluent API configuration has the highest precedence 
            // and will override conventions and data annotations.
            modelBuilder.Entity<Product>()
            .Property(prod => prod.name)
            .IsRequired().HasMaxLength(50);

            modelBuilder.Entity<Product>()
            .Property(prod => prod.image)
            .IsRequired();

            modelBuilder.Entity<Product>()
           .Property(prod => prod.description)
           .IsRequired();

            modelBuilder.Entity<Product>()
           .Property(prod => prod.productNum)
           .IsRequired();
        }
    }
}