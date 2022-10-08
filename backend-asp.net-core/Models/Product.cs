/*
 * LINK TO DATA ANNOTATIONS 
 * https://docs.microsoft.com/en-us/dotnet/api/system.componentmodel.dataannotations?view=net-6.0 
 */
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Models
{

    [Table("Products")]
    public class Product
    {


        [Key]
        public string productNum { get; set; }

        [MinLength(3, ErrorMessage = "Name too short")]
        public string name { get; set; }

        [Url]
        public string image { get; set; }

        public string description { get; set; }


        public Product()
        {

        }

        public Product(string name, string image, string description)
        {
            this.productNum = System.Guid.NewGuid().ToString().Substring(0, 20);
            this.name = name;
            this.image = image;
            this.description = description;
        }

    }
}