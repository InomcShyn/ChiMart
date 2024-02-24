// HomeController.cs

using Microsoft.AspNetCore.Mvc;

namespace MyDotnetProject.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return Content("Hello from .NET frontend!");
        }
    }
}
