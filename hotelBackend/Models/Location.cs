using System;
using System.Collections.Generic;

#nullable disable

namespace hotelBackend.Models
{
    public partial class Location
    {
        public Location()
        {
            Hotels = new HashSet<Hotel>();
        }

        public int Id { get; set; }
        public string Location1 { get; set; }

        public virtual ICollection<Hotel> Hotels { get; set; }
    }
}
