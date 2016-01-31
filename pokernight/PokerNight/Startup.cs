using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(PokerNight.Startup))]
namespace PokerNight
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
