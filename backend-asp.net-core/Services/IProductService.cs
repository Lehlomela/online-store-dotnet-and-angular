using Models;

namespace Services
{
    public interface IProductService
    {

        int saveProduct(Product product);

        IEnumerable<Product> getAllProducts();
    }
}