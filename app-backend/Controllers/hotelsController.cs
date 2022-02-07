using app_backend.Models;
using app_backend.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;




namespace app_backend.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class HotelsController : ControllerBase
  {
    private readonly IHotelAppRepository _repository;

    private readonly hotelappdbContext _context;

    public HotelsController(hotelappdbContext context, HotelAppRepository appRepository)
    {
      _context = context;
      _repository = appRepository;  
    }
    [HttpGet ("{location}")]
    public IActionResult Index(string Search)
    {
      
      if (!String.IsNullOrEmpty(Search))
      {
        return Ok(_repository.GetAllLocations());
      }
      else
      {
        return Ok(_repository.GetHotels(Search));
      }
    }

    
  }
}
