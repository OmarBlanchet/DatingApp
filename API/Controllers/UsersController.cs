using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using API.Interfaces;
using API.DTO;
using AutoMapper;

namespace API.Controllers
{
    [Authorize] //solicitud valida solo con token
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository repository,  IMapper mapper)
        {
            this._repository = repository;
            this._mapper = mapper;
        }

        [HttpGet]
        public async Task <ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            return Ok(await _repository.GeMembersAsync());
            // var users = await _repository.GetUsersAsync();
            // var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
            // return Ok(usersToReturn);
        }

        [HttpGet("{userName}")]//api/users/omar
        public async Task <ActionResult<MemberDto>> GetUser(string userName)
        {
            return await _repository.GeMemberAsync(userName);
            // var user = await _repository.GetUserByNameAsync(userName);
            // if (user == null)
            //     return BadRequest("Username NO existe");
            // return _mapper.Map<MemberDto>(user);
        }
    }
}