using System;
using System.Collections.Generic;

#nullable disable

namespace Backend.Models
{
    public partial class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Rate { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        public byte[] ImageUrl { get; set; }
        public int NumOfStars { get; set; }
        public string Location { get; set; }

        public virtual Location LocationNavigation { get; set; }
    }
}
