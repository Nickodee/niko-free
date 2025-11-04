import { Calendar, Users, DollarSign, Download, Zap, Home, Bell, UserPlus, QrCode, Award, Menu, X, ChevronRight, ArrowUpRight, ArrowDownRight, Wallet, CreditCard, Clock, Search, User, Settings, LogOut } from 'lucide-react';
import { useState } from 'react';

interface PartnerDashboardProps {
  onNavigate: (page: string) => void;
}

export default function PartnerDashboard({ onNavigate }: PartnerDashboardProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'events' | 'attendees' | 'boost' | 'notifications' | 'roles' | 'scanner' | 'verification'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const financialStats = [
    { 
      label: 'Net Earnings', 
      value: 'KES 264,771', 
      icon: DollarSign, 
      color: 'from-blue-500 to-blue-600', 
      subtext: 'After 7% commission',
      change: '+15%',
      isPositive: true
    },
    { 
      label: 'Amount Withdrawn', 
      value: 'KES 180,000', 
      icon: ArrowDownRight, 
      color: 'from-purple-500 to-purple-600', 
      subtext: 'Total withdrawn',
      change: '3 transactions',
      isPositive: false
    },
    { 
      label: 'Current Balance', 
      value: 'KES 84,771', 
      icon: Wallet, 
      color: 'from-green-500 to-green-600', 
      subtext: 'Available to withdraw',
      change: 'Instant withdrawal',
      isPositive: true
    },
    { 
      label: 'Pending Clearance', 
      value: 'KES 12,500', 
      icon: Clock, 
      color: 'from-orange-500 to-orange-600', 
      subtext: 'From recent events',
      change: 'Clears in 24hrs',
      isPositive: true
    }
  ];

  const withdrawals = [
    { id: '1', date: '2025-11-01', amount: 'KES 80,000', method: 'M-Pesa', phone: '***456789', status: 'completed' },
    { id: '2', date: '2025-10-25', amount: 'KES 50,000', method: 'Bank', account: '***1234', status: 'completed' },
    { id: '3', date: '2025-10-15', amount: 'KES 50,000', method: 'M-Pesa', phone: '***456789', status: 'completed' }
  ];

  const currentEvents = [
    {
      id: '1',
      title: 'Nairobi Tech Summit 2025',
      date: 'Nov 15, 2025',
      attendees: 847,
      revenue: 'KES 158,000',
      netEarnings: 'KES 146,940',
      ticketsSold: 847,
      totalTickets: 1000,
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'Startup Networking Mixer',
      date: 'Nov 20, 2025',
      attendees: 120,
      revenue: 'KES 46,500',
      netEarnings: 'KES 43,245',
      ticketsSold: 120,
      totalTickets: 150,
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Wellness & Fitness Expo',
      date: 'Nov 25, 2025',
      attendees: 234,
      revenue: 'KES 72,300',
      netEarnings: 'KES 67,239',
      ticketsSold: 234,
      totalTickets: 300,
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const eventHistory = [
    {
      id: '4',
      title: 'Jazz Night Live',
      date: 'Oct 25, 2025',
      attendees: 189,
      revenue: 'KES 80,200',
      netEarnings: 'KES 74,586',
      ticketsSold: 189,
      totalTickets: 200,
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'Art Gallery Opening',
      date: 'Oct 18, 2025',
      attendees: 95,
      revenue: 'KES 35,000',
      netEarnings: 'KES 32,550',
      ticketsSold: 95,
      totalTickets: 100,
      image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'attendees', label: 'Attendees', icon: Users },
    { id: 'boost', label: 'Boost Event', icon: Zap },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'roles', label: 'Assign Roles', icon: UserPlus },
    { id: 'scanner', label: 'Scan Tickets', icon: QrCode },
    { id: 'verification', label: 'Verification', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 lg:transform-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">Partner Portal</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => {
                          setActiveTab(item.id as 'dashboard' | 'events' | 'attendees' | 'boost' | 'notifications' | 'roles' | 'scanner' | 'verification');
                          setSidebarOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all ${
                          activeTab === item.id
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-x-hidden">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 fixed top-0 right-0 left-0 lg:left-64 z-30 shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex items-center justify-between gap-4">
                {/* Left Section - Menu & Title */}
                <div className="flex items-center space-x-4 flex-shrink-0">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    <Menu className="w-6 h-6" />
                  </button>
                  <div className="hidden sm:block">
                    <h1 className="text-xl font-bold text-gray-900">
                      {menuItems.find(item => item.id === activeTab)?.label}
                    </h1>
                  </div>
                </div>

                {/* Center Section - Search Bar */}
                <div className="flex-1 max-w-md hidden md:block">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search events, attendees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Right Section - Actions & Account */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  {/* Account Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setAccountMenuOpen(!accountMenuOpen)}
                      className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="hidden lg:block text-left">
                        <p className="text-sm font-semibold text-gray-900">Tech Hub Africa</p>
                        <p className="text-xs text-gray-500">Partner Account</p>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {accountMenuOpen && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">Tech Hub Africa</p>
                          <p className="text-xs text-gray-500">partner@techhub.com</p>
                        </div>
                        <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
                          <User className="w-4 h-4" />
                          <span>My Profile</span>
                        </button>
                        <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-3">
                          <Settings className="w-4 h-4" />
                          <span>Settings</span>
                        </button>
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <button 
                            onClick={() => onNavigate('landing')}
                            className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-3"
                          >
                            <LogOut className="w-4 h-4" />
                            <span>Log Out</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile Search Bar */}
              <div className="mt-3 md:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events, attendees..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 pt-24">
            {activeTab === 'dashboard' && (
              <div className="space-y-8">
                {/* Financial Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {financialStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          {stat.change && (
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              stat.isPositive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {stat.change}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.subtext}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Withdraw & Statement Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-lg font-bold mb-1">Withdraw Funds</h3>
                        <p className="text-blue-100 text-sm">Instant to M-Pesa or Bank</p>
                      </div>
                      <ArrowUpRight className="w-8 h-8" />
                    </div>
                  </button>
                  <button className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">Download Statement</h3>
                        <p className="text-gray-600 text-sm">PDF or Excel format</p>
                      </div>
                      <Download className="w-8 h-8 text-gray-700" />
                    </div>
                  </button>
                </div>

                {/* Recent Withdrawals */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Withdrawals</h3>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View All</button>
                  </div>
                  <div className="space-y-4">
                    {withdrawals.map((withdrawal) => (
                      <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <CreditCard className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{withdrawal.method}</p>
                            <p className="text-sm text-gray-600">
                              {withdrawal.phone || withdrawal.account} • {withdrawal.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-gray-900">{withdrawal.amount}</p>
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
                            {withdrawal.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Current Events Slideshow */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Current Events</h3>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentEvents.map((event) => (
                      <div
                        key={event.id}
                        className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                      >
                        <div className="relative h-40">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            ACTIVE
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Net Earnings</span>
                              <span className="font-bold text-green-600">{event.netEarnings}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Attendees</span>
                              <span className="font-semibold">{event.attendees}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${(event.ticketsSold / event.totalTickets) * 100}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-600 text-right">
                              {event.ticketsSold}/{event.totalTickets} tickets sold
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Events History Slideshow */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Events History</h3>
                    <ChevronRight className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {eventHistory.map((event) => (
                      <div
                        key={event.id}
                        className="group cursor-pointer bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                      >
                        <div className="relative h-40">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            COMPLETED
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-gray-900 mb-2 line-clamp-1">{event.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{event.date}</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Net Earnings</span>
                              <span className="font-bold text-green-600">{event.netEarnings}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-600">Attendees</span>
                              <span className="font-semibold">{event.attendees}</span>
                            </div>
                            <button className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors text-sm">
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Events Management</h3>
                <p className="text-gray-600">Edit events, manage tickets, and update hosts</p>
              </div>
            )}

            {activeTab === 'attendees' && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Attendees Demographics</h3>
                <p className="text-gray-600">View attendee details and download reports</p>
              </div>
            )}

            {activeTab === 'boost' && (
              <div className="text-center py-12">
                <Zap className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Boost Your Events</h3>
                <p className="text-gray-600">Increase visibility and reach more attendees</p>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="text-center py-12">
                <Bell className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Notification Settings</h3>
                <p className="text-gray-600">Manage your notification preferences</p>
              </div>
            )}

            {activeTab === 'roles' && (
              <div className="text-center py-12">
                <UserPlus className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assign Roles</h3>
                <p className="text-gray-600">Manage team members and promotional agents</p>
              </div>
            )}

            {activeTab === 'scanner' && (
              <div className="text-center py-12">
                <QrCode className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scan Tickets</h3>
                <p className="text-gray-600">Verify attendee tickets at your events</p>
              </div>
            )}

            {activeTab === 'verification' && (
              <div className="text-center py-12">
                <Award className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Partner Verification</h3>
                <p className="text-gray-600">Track your progress to become NIKO VERIFIED</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
