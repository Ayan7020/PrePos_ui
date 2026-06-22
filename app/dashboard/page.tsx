import { Store, Users, ShoppingCart, ArrowUpRight } from "lucide-react";

export default function DashboardPage() {
  const stats = [
    {
      name: "Workspaces",
      value: "2",
      icon: Store,
      change: "+1 new this month",
      color: "text-primary bg-primary/10",
    },
    {
      name: "Workspace Members",
      value: "14",
      icon: Users,
      change: "+3 active today",
      color: "text-blue-600 bg-blue-500/10",
    },
    {
      name: "Daily Transactions",
      value: "156",
      icon: ShoppingCart,
      change: "+24% compared to yesterday",
      color: "text-success bg-success/10",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="bg-surface border border-border p-6 rounded-2xl flex justify-between items-center shadow-sm">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Welcome to PrEpos!</h2>
          <p className="text-text-secondary text-sm">
            Here is what's happening across your point-of-sale workspaces today.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-surface border border-border p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-250 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <button className="p-1 rounded-lg text-text-secondary group-hover:text-primary group-hover:bg-primary/5 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-1">
                <span className="text-text-secondary text-xs font-medium tracking-wide uppercase">
                  {stat.name}
                </span>
                <div className="text-3xl font-extrabold tracking-tight">{stat.value}</div>
                <span className="text-xs text-text-secondary block font-medium">
                  {stat.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
