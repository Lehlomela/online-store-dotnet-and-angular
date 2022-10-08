using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Controllers
{

    [ApiController]
    [EnableCors("Policy1")]
    public class HomeController : ControllerBase
    {

        [HttpGet("~/")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult home()
        {
            return Ok("Welcome using swagger ?: todo");
        }

    }
}