using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime fecha)
        {
            var today = DateTime.Today;
            var age = today.Year - fecha.Year;

            if (fecha.Date > today.AddYears(-age))
                age--;
            
            return age;
        }
    }
}