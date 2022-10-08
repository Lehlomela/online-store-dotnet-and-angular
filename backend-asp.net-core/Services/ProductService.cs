using Config;
using Models;

namespace Services
{

    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext applicationDbContext;

        public ProductService(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        public int saveProduct(Product product)
        {
            applicationDbContext.Products.Add(product);
            return applicationDbContext.SaveChanges();
        }

        public IEnumerable<Product> getAllProducts(){
            return applicationDbContext.Products.ToList();
        }
    }
}