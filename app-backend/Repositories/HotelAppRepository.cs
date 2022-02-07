using app_backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace app_backend.Repositories
{
  public class HotelAppRepository : IHotelAppRepository
  {
    

    private readonly hotelappdbContext _context;

    public HotelAppRepository(hotelappdbContext context)
    {
      _context = context;

    }
    public IEnumerable<Location> GetAllLocations()
    {
        return _context.Locations;
    
      
    }

    public IEnumerable<Hotel> GetHotels(string search)
    {
      return _context.Hotels
                .Where(h => h.Location == search);

    }
  }
}
