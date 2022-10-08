
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

namespace Controllers
{

    [ApiController]
    [Route("api/products")]
    [EnableCors("Policy1")]
    public class ProductController : ControllerBase
    {

        private readonly IProductService productService;

        public ProductController(IProductService productService)
        {
            this.productService = productService;
        }

        [HttpGet]
        public IActionResult getProducts()
        {
            return Ok(productService.getAllProducts());
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public ActionResult<int>  saveProduct(Product product){
            return productService.saveProduct(product);
        }
    }
}