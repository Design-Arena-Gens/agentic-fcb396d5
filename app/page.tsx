'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Zap,
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  Target,
  Rocket,
  Brain,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Plus,
  ChevronRight,
  Calendar,
  Package,
  Settings
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  service: string;
  status: 'active' | 'pending' | 'delivered' | 'archived';
  progress: number;
  deadline: string;
  value: number;
}

interface Task {
  id: string;
  title: string;
  project?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'todo' | 'in-progress' | 'done';
  dueDate?: string;
}

interface Asset {
  id: string;
  name: string;
  type: 'prompt' | 'model' | 'workflow' | 'brand-kit' | 'template';
  tags: string[];
  lastUsed?: string;
}

export default function CommandCenter() {
  const [activeView, setActiveView] = useState<'dashboard' | 'projects' | 'clients' | 'assets' | 'services'>('dashboard');
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Custom GPT Engine',
      client: 'TechCorp',
      service: 'AI Engine Development',
      status: 'active',
      progress: 65,
      deadline: '2025-12-01',
      value: 15000
    },
    {
      id: '2',
      title: 'Brand Persona Kit',
      client: 'StartupXYZ',
      service: 'Brand Identity AI',
      status: 'active',
      progress: 40,
      deadline: '2025-11-25',
      value: 8500
    },
    {
      id: '3',
      title: 'Workflow Automation',
      client: 'Enterprise Co',
      service: 'Process Optimization',
      status: 'pending',
      progress: 15,
      deadline: '2025-12-10',
      value: 22000
    }
  ]);

  const [tasks] = useState<Task[]>([
    { id: '1', title: 'Finalize prompt architecture for TechCorp', project: 'Custom GPT Engine', priority: 'high', status: 'in-progress', dueDate: '2025-11-16' },
    { id: '2', title: 'Create brand voice guidelines', project: 'Brand Persona Kit', priority: 'high', status: 'todo', dueDate: '2025-11-17' },
    { id: '3', title: 'Test model fine-tuning results', priority: 'medium', status: 'in-progress' },
    { id: '4', title: 'Schedule client demo', project: 'Custom GPT Engine', priority: 'medium', status: 'todo', dueDate: '2025-11-18' },
    { id: '5', title: 'Document workflow improvements', priority: 'low', status: 'todo' }
  ]);

  const [assets] = useState<Asset[]>([
    { id: '1', name: 'E-commerce Product Description Engine', type: 'prompt', tags: ['ecommerce', 'copywriting'], lastUsed: '2025-11-14' },
    { id: '2', name: 'Brand Voice Analyzer', type: 'model', tags: ['brand', 'analysis'], lastUsed: '2025-11-13' },
    { id: '3', name: 'Content Calendar Workflow', type: 'workflow', tags: ['content', 'automation'], lastUsed: '2025-11-12' },
    { id: '4', name: 'SaaS Startup Identity Kit', type: 'brand-kit', tags: ['saas', 'branding'], lastUsed: '2025-11-10' },
    { id: '5', name: 'Prompt Engineering Template', type: 'template', tags: ['prompts', 'framework'] }
  ]);

  const services = [
    { name: 'Custom AI Engines', icon: Brain, count: 3, active: 2 },
    { name: 'Prompt Engineering', icon: Sparkles, count: 12, active: 5 },
    { name: 'Creative Production', icon: Rocket, count: 8, active: 3 },
    { name: 'Workflow Audits', icon: Target, count: 4, active: 1 },
    { name: 'Brand Persona Kits', icon: Zap, count: 6, active: 2 }
  ];

  const stats = {
    activeProjects: projects.filter(p => p.status === 'active').length,
    totalRevenue: projects.reduce((sum, p) => sum + p.value, 0),
    completionRate: Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length),
    upcomingDeadlines: projects.filter(p => new Date(p.deadline) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)).length
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'active': case 'in-progress': return 'text-green-400 bg-green-400/10';
      case 'pending': case 'todo': return 'text-yellow-400 bg-yellow-400/10';
      case 'delivered': case 'done': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 text-gray-100">
      {/* Header */}
      <header className="border-b border-dark-600 bg-dark-800/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
                  Command Center
                </h1>
                <p className="text-xs text-gray-400">AI Services Hub</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">Solo Founder Mode</p>
                <p className="text-xs text-gray-400">Friday, Nov 15, 2025</p>
              </div>
              <button className="w-10 h-10 rounded-lg bg-dark-600 hover:bg-dark-500 transition-colors flex items-center justify-center">
                <Settings className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Navigation */}
        <nav className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
            { id: 'projects', label: 'Projects', icon: Briefcase },
            { id: 'clients', label: 'Clients', icon: Users },
            { id: 'assets', label: 'Assets', icon: Package },
            { id: 'services', label: 'Services', icon: Zap }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveView(id as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                activeView === id
                  ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-accent-purple/20'
                  : 'glass-card text-gray-300 hover:text-white hover:bg-dark-600'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Dashboard View */}
        {activeView === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-purple/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold mb-1">{stats.activeProjects}</p>
                <p className="text-sm text-gray-400">Active Projects</p>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-blue/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-3xl font-bold mb-1">${(stats.totalRevenue / 1000).toFixed(0)}k</p>
                <p className="text-sm text-gray-400">Total Pipeline</p>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-cyan/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-gray-400">avg</span>
                </div>
                <p className="text-3xl font-bold mb-1">{stats.completionRate}%</p>
                <p className="text-sm text-gray-400">Completion Rate</p>
              </div>

              <div className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-pink/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <AlertCircle className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-3xl font-bold mb-1">{stats.upcomingDeadlines}</p>
                <p className="text-sm text-gray-400">Due This Week</p>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Active Projects */}
              <div className="lg:col-span-2 glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-accent-purple" />
                    Active Projects
                  </h2>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white text-sm font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Project
                  </button>
                </div>
                <div className="space-y-4">
                  {projects.filter(p => p.status === 'active').map(project => (
                    <div key={project.id} className="border border-dark-600 rounded-lg p-4 hover:border-accent-purple/30 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-white mb-1">{project.title}</h3>
                          <p className="text-sm text-gray-400">{project.client} • {project.service}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-400">Progress</span>
                          <span className="font-medium text-accent-purple">{project.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full transition-all"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1 text-green-400 font-medium">
                            <DollarSign className="w-4 h-4" />
                            {(project.value / 1000).toFixed(1)}k
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Today's Tasks */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    Today's Focus
                  </h2>
                  <button className="text-accent-purple hover:text-accent-blue transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3 max-h-[500px] overflow-y-auto scrollbar-thin">
                  {tasks.filter(t => t.status !== 'done').map(task => (
                    <div key={task.id} className="border border-dark-600 rounded-lg p-3 hover:border-accent-blue/30 transition-all">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          className="mt-1 w-4 h-4 rounded border-dark-500 bg-dark-700 checked:bg-accent-purple"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white mb-1">{task.title}</p>
                          {task.project && (
                            <p className="text-xs text-gray-500 mb-2">{task.project}</p>
                          )}
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
                              {task.priority}
                            </span>
                            {task.dueDate && (
                              <span className="text-xs text-gray-500">
                                {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent-cyan" />
                Service Delivery Overview
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="border border-dark-600 rounded-lg p-4 hover:border-accent-cyan/30 transition-all cursor-pointer">
                      <Icon className="w-8 h-8 text-accent-cyan mb-3" />
                      <h3 className="font-semibold text-white mb-2 text-sm">{service.name}</h3>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">{service.count} total</span>
                        <span className="text-accent-cyan font-medium">{service.active} active</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Projects View */}
        {activeView === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Projects</h2>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create Project
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <div key={project.id} className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-purple/10 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{project.client}</p>
                  <div className="border-t border-dark-600 pt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-medium text-accent-purple">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden mb-4">
                      <div
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-blue rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">
                        Due {new Date(project.deadline).toLocaleDateString()}
                      </span>
                      <span className="text-green-400 font-semibold">
                        ${(project.value / 1000).toFixed(1)}k
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Assets View */}
        {activeView === 'assets' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Asset Library</h2>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Asset
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assets.map(asset => (
                <div key={asset.id} className="glass-card rounded-xl p-5 hover:border hover:border-accent-cyan/30 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="px-2 py-1 rounded text-xs font-medium bg-accent-purple/10 text-accent-purple capitalize">
                      {asset.type}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{asset.name}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {asset.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-xs bg-dark-700 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {asset.lastUsed && (
                    <p className="text-xs text-gray-500">
                      Last used {new Date(asset.lastUsed).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services View */}
        {activeView === 'services' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Service Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-purple/10 transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-400 mb-4">
                      Delivering cutting-edge AI solutions
                    </p>
                    <div className="border-t border-dark-600 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-white">{service.count}</p>
                          <p className="text-xs text-gray-400">Total delivered</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-accent-cyan">{service.active}</p>
                          <p className="text-xs text-gray-400">Active now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Clients View */}
        {activeView === 'clients' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Client Management</h2>
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-purple to-accent-blue text-white font-medium hover:shadow-lg hover:shadow-accent-purple/20 transition-all flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Add Client
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['TechCorp', 'StartupXYZ', 'Enterprise Co'].map((client, idx) => {
                const clientProjects = projects.filter(p => p.client === client);
                const totalValue = clientProjects.reduce((sum, p) => sum + p.value, 0);
                return (
                  <div key={idx} className="glass-card rounded-xl p-6 hover:shadow-lg hover:shadow-accent-blue/10 transition-all cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-blue to-accent-cyan flex items-center justify-center mb-4 text-2xl font-bold">
                      {client.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{client}</h3>
                    <p className="text-sm text-gray-400 mb-4">{clientProjects.length} active projects</p>
                    <div className="border-t border-dark-600 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Total Value</span>
                        <span className="text-lg font-bold text-green-400">${(totalValue / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
