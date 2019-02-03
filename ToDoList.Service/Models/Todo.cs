using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Service.Models
{
    public class Todo
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [StringLength(110)]
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
    }
}
