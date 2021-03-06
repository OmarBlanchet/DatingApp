using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Extensions;

namespace API.Entities
{
    public class AppUser
    {
        #region Propiedades
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }  
        public DateTime Created { get; set; }  
        public DateTime LastActive { get; set; }  
        public string KnowsAs { get; set; } 
        public string Gender { get; set; } 
        public string Introduction { get; set; } 
        public string LookingFor { get; set; } 
        public string Interest { get; set; } 
        public string City { get; set; } 
        public string Country { get; set; } 
        public ICollection<Photo> Photos { get; set; }    
        #endregion

        // public int GetAge()
        // {
        //     return DateOfBirth.CalculateAge();
        // }
    }
}