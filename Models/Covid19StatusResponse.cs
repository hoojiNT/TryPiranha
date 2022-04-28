using Newtonsoft.Json;

namespace TryPiranha.Models
{
    public class Covid19Status
    {
        public int Active { get; set; }
        public double ActivePerOnMilion { get; set; }
        [JsonProperty("cases")]
        public int Cases { get; set; }
        public string Continent { get; set; }
        public string Country { get; set; }
        public int Critical { get; set; }
        public double CriticalPerOnMilion { get; set; }
        public double OneCasePerPeople { get; set; }
        public double OnDeathPerPeople { get; set; }
        public int Deaths { get; set; }
        public Double DeathsPerOneMilion { get; set; }
        public int Population { get; set; }
        public int Recovered { get; set; }
        public double RecoveredPerMilion { get; set; }
        public int Tests { get; set; }
        public double TestPerOneMilion { get; set; }
        public int TodayCases { get; set; }
        public int TodayDeaths { get; set; }
        public int TodayRecovered { get; set; }
        public ulong Updated { get; set; } 

    }

    public class Country
    {
        public string Name { get; set; }
        public string Code { get; set; }
    }
    public class CountryInfo
    {
        
    }
}
