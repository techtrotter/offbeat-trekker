
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User,
  Mail,
  MapPin,
  Calendar, 
  Settings, 
  LogOut, 
  Edit, 
  Camera,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { users } from '@/utils/mockData';

// Get mock user
const mockUser = users[0];

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(mockUser.bio || '');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection variant="fade-up">
              {/* Profile Header */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                {/* Cover Photo */}
                <div className="h-48 md:h-64 bg-gradient-to-r from-offbeats-600 to-sky-600 relative">
                  <button className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <Camera className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
                
                {/* Profile Info */}
                <div className="px-6 py-6 md:px-8 md:py-8 relative">
                  {/* Profile Picture */}
                  <div className="absolute -top-16 left-6 md:left-8">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-gray-200 dark:bg-gray-800">
                        <img 
                          src={mockUser.profileImage || "https://images.unsplash.com/photo-1472396961693-142e6e269027"} 
                          alt={mockUser.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                        <Camera className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Upper Section */}
                  <div className="mt-14 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {mockUser.name}
                      </h1>
                      <div className="flex items-center mt-1 text-gray-600 dark:text-gray-400">
                        <Mail className="h-4 w-4 mr-1.5" />
                        <span>{mockUser.email}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-1.5"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit className="h-4 w-4" />
                        <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                      </Button>
                      <Button 
                        variant="default" 
                        className="bg-offbeats-600 hover:bg-offbeats-700 flex items-center gap-1.5"
                      >
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      About
                    </h2>
                    {isEditing ? (
                      <div>
                        <textarea 
                          value={bio} 
                          onChange={(e) => setBio(e.target.value)}
                          className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 min-h-[100px]"
                          placeholder="Write something about yourself..."
                        />
                        <div className="mt-2 flex justify-end">
                          <Button 
                            variant="default" 
                            className="bg-offbeats-600 hover:bg-offbeats-700"
                            onClick={() => setIsEditing(false)}
                          >
                            Save
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {bio || mockUser.bio || "No bio yet. Click 'Edit Profile' to add one."}
                      </p>
                    )}
                  </div>
                  
                  {/* Interests */}
                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Interests
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {mockUser.interests?.map((interest, index) => (
                        <span 
                          key={index} 
                          className="bg-offbeats-100 dark:bg-offbeats-900/40 text-offbeats-700 dark:text-offbeats-400 rounded-full px-3 py-1 text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                      <button className="border border-dashed border-gray-300 dark:border-gray-700 text-gray-500 rounded-full px-3 py-1 text-sm flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <Plus className="h-3 w-3 mr-1" />
                        Add Interest
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Recent Activity */}
            <AnimatedSection variant="fade-up" delay={0.2}>
              <div className="mt-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Recent Activity
                </h2>
                
                {/* Empty state */}
                <div className="py-12 text-center">
                  <div className="bg-gray-100 dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-gray-500 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                    No activity yet
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                    Your recent trips, reviews, and interactions will appear here. Start exploring to create your travel history.
                  </p>
                  <Link to="/destinations">
                    <Button className="bg-offbeats-600 hover:bg-offbeats-700">
                      Explore Destinations
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
