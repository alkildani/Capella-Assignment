using app_backend.Models;
using System.Collections.Generic;

namespace app_backend.Repositories
{
  public interface IHotelAppRepository
  {
    public IEnumerable<Location> GetAllLocations();
    public IEnumerable<Hotel> GetHotels(string search);
  }
}
