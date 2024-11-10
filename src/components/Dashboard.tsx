import React from 'react';
import { 
  AlertTriangle, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ThermometerSun,
  Wind,
  Droplets,
  Gauge
} from 'lucide-react';

export function Dashboard() {
  const stats = [
    { name: 'Total Equipment', value: '124', change: '+3', changeType: 'increase' },
    { name: 'Pending Maintenance', value: '8', change: '+2', changeType: 'increase' },
    { name: 'Due Calibrations', value: '5', change: '-1', changeType: 'decrease' },
    { name: 'Active Alerts', value: '3', change: '+1', changeType: 'increase' },
  ];

  const equipmentTypes = [
    { name: 'Thermometers', icon: ThermometerSun, count: 32, status: 'operational' },
    { name: 'Anemometers', icon: Wind, count: 28, status: 'maintenance' },
    { name: 'Hygrometers', icon: Droplets, count: 24, status: 'operational' },
    { name: 'Barometers', icon: Gauge, count: 40, status: 'operational' },
  ];

  const upcomingMaintenance = [
    {
      id: 1,
      equipment: 'Vaisala WXT536',
      type: 'Calibration',
      date: '2024-03-25',
      priority: 'high',
    },
    {
      id: 2,
      equipment: 'Davis Pro2',
      type: 'Preventive',
      date: '2024-03-27',
      priority: 'medium',
    },
    {
      id: 3,
      equipment: 'Gill WindSonic',
      type: 'Corrective',
      date: '2024-03-28',
      priority: 'low',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Last updated: 5 minutes ago</span>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {stat.name === 'Active Alerts' && (
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  )}
                  {stat.name === 'Pending Maintenance' && (
                    <Clock className="h-6 w-6 text-blue-400" />
                  )}
                  {stat.name === 'Due Calibrations' && (
                    <Calendar className="h-6 w-6 text-purple-400" />
                  )}
                  {stat.name === 'Total Equipment' && (
                    <CheckCircle2 className="h-6 w-6 text-green-400" />
                  )}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Status */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {equipmentTypes.map((type) => {
          const Icon = type.icon;
          return (
            <div key={type.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <div className="text-sm font-medium text-gray-500">{type.name}</div>
                    <div className="mt-1 flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {type.count}
                      </div>
                      <div className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        type.status === 'operational' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {type.status}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Maintenance */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Upcoming Maintenance
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {upcomingMaintenance.map((task) => (
              <li key={task.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`h-2.5 w-2.5 rounded-full ${
                        task.priority === 'high' ? 'bg-red-600' :
                        task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {task.equipment}
                      </div>
                      <div className="text-sm text-gray-500">
                        {task.type} Maintenance
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-gray-500">{task.date}</div>
                    <button className="ml-4 px-3 py-1 text-sm text-indigo-600 hover:text-indigo-900">
                      View Details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}