using Piranha.Extend;
using Piranha.Extend.Blocks;
using Piranha.Extend.Fields;
using TryPiranha.Models;

namespace TryPiranha.Blocks
{
    [BlockType(Name = "Covid", Category = "Content", Component = "covid-status", Icon = "fas fa-quote-right",
        IsGeneric = true)]
    public class CovidStatusBlock : Block
    {
        public Covid19Status Status { get; set; }
        public string Region { get; set; }

        public CovidStatusBlock()
        {
            Status = new Covid19Status();
        }


        public override string GetTitle()
        {
            return "Corona plague's status";
        }
    }

    [BlockType(Name = "Html", Category = "Content", Icon = "fab fa-html5", Component = "rawhtml-block")]
    public class RawHtmlBlock : TextBlock
    {
    }
}