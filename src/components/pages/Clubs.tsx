import { useState } from "react";
import { Users, Calendar, MapPin, Clock, Filter, Search, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ClubJoinDialog } from "@/components/clubs/ClubJoinDialog";
import { ClubMembersDialog } from "@/components/clubs/ClubMembersDialog";

interface Club {
  id: string;
  name: string;
  day: string;
  time: string;
  location: string;
  coordinator: string;
  description: string;
  participants: number;
  maxParticipants: number;
  category: "sports" | "arts" | "academic" | "other";
}

const clubs: Club[] = [
  {
    id: "1",
    name: "Swimming",
    day: "Thursday",
    time: "2:00 PM - 4:00 PM",
    location: "Swimming Pool",
    coordinator: "Swimming Instructor",
    description: "Learn swimming techniques and water safety skills",
    participants: 15,
    maxParticipants: 20,
    category: "sports"
  },
  {
    id: "2",
    name: "Badminton",
    day: "Wednesday",
    time: "3:00 PM - 5:00 PM",
    location: "Sports Hall",
    coordinator: "Sports Teacher",
    description: "Develop badminton skills and competitive spirit",
    participants: 12,
    maxParticipants: 16,
    category: "sports"
  },
  {
    id: "3",
    name: "Cookery",
    day: "Wednesday",
    time: "2:30 PM - 4:30 PM",
    location: "Kitchen Lab",
    coordinator: "Home Economics Teacher",
    description: "Learn cooking skills and food preparation",
    participants: 10,
    maxParticipants: 12,
    category: "other"
  },
  {
    id: "4",
    name: "Aviation",
    day: "Wednesday",
    time: "3:30 PM - 5:00 PM",
    location: "Science Lab",
    coordinator: "Science Teacher",
    description: "Explore aviation principles and aircraft design",
    participants: 8,
    maxParticipants: 15,
    category: "academic"
  },
  {
    id: "5",
    name: "Music",
    day: "Wednesday",
    time: "2:00 PM - 4:00 PM",
    location: "Music Room",
    coordinator: "Tr. Mbabazi Seth",
    description: "Learn musical instruments and vocal techniques",
    participants: 18,
    maxParticipants: 25,
    category: "arts"
  },
  {
    id: "6",
    name: "Football",
    day: "Wednesday",
    time: "4:00 PM - 6:00 PM",
    location: "Football Field",
    coordinator: "Tr. Nakiyemba Shakira",
    description: "Develop football skills and teamwork",
    participants: 22,
    maxParticipants: 30,
    category: "sports"
  },
  {
    id: "7",
    name: "Ballet",
    day: "Wednesday",
    time: "3:00 PM - 4:30 PM",
    location: "Dance Studio",
    coordinator: "Dance Teacher",
    description: "Learn classical ballet techniques and performances",
    participants: 14,
    maxParticipants: 20,
    category: "arts"
  }
];

export default function Clubs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isJoinDialogOpen, setIsJoinDialogOpen] = useState(false);
  const [isMembersDialogOpen, setIsMembersDialogOpen] = useState(false);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.coordinator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "sports":
        return "bg-blue-100 text-blue-800";
      case "arts":
        return "bg-purple-100 text-purple-800";
      case "academic":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAvailabilityColor = (participants: number, maxParticipants: number) => {
    const ratio = participants / maxParticipants;
    if (ratio < 0.7) return "bg-green-100 text-green-800";
    if (ratio < 0.9) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const clubsByDay = clubs.reduce((acc, club) => {
    if (!acc[club.day]) acc[club.day] = [];
    acc[club.day].push(club);
    return acc;
  }, {} as Record<string, Club[]>);

  const handleJoinClub = (club: Club) => {
    setSelectedClub(club);
    setIsJoinDialogOpen(true);
  };

  const handleViewMembers = (club: Club) => {
    setSelectedClub(club);
    setIsMembersDialogOpen(true);
  };

  const handleClubJoin = (clubId: string, memberData: any) => {
    // In a real app, this would make an API call
    console.log('Joining club:', clubId, memberData);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">School Clubs</h1>
          <p className="text-muted-foreground">Explore extracurricular activities and join clubs</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </Button>
          <Button className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span>Browse Clubs</span>
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search clubs by name or coordinator..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>Advanced Filters</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different views */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Clubs</TabsTrigger>
          <TabsTrigger value="wednesday">Wednesday</TabsTrigger>
          <TabsTrigger value="thursday">Thursday</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Category filters */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Category:</span>
            <div className="flex space-x-2">
              {["all", "sports", "arts", "academic", "other"].map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Badge>
              ))}
            </div>
          </div>

          {/* Clubs Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredClubs.map((club, index) => (
              <Card key={club.id} className="hover:shadow-elegant transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{club.coordinator}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(club.category)}>
                      {club.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.day}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <Badge className={getAvailabilityColor(club.participants, club.maxParticipants)}>
                      {club.participants}/{club.maxParticipants}
                    </Badge>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleJoinClub(club)}
                      disabled={club.participants >= club.maxParticipants}
                    >
                      {club.participants >= club.maxParticipants ? 'Full' : 'Join Club'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewMembers(club)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wednesday" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clubsByDay["Wednesday"]?.map((club, index) => (
              <Card key={club.id} className="hover:shadow-elegant transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{club.coordinator}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(club.category)}>
                      {club.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <Badge className={getAvailabilityColor(club.participants, club.maxParticipants)}>
                      {club.participants}/{club.maxParticipants}
                    </Badge>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleJoinClub(club)}
                      disabled={club.participants >= club.maxParticipants}
                    >
                      {club.participants >= club.maxParticipants ? 'Full' : 'Join Club'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewMembers(club)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="thursday" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clubsByDay["Thursday"]?.map((club, index) => (
              <Card key={club.id} className="hover:shadow-elegant transition-all duration-200 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{club.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{club.coordinator}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(club.category)}>
                      {club.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{club.description}</p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{club.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <Badge className={getAvailabilityColor(club.participants, club.maxParticipants)}>
                      {club.participants}/{club.maxParticipants}
                    </Badge>
                  </div>

                  <div className="flex space-x-2 mt-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleJoinClub(club)}
                      disabled={club.participants >= club.maxParticipants}
                    >
                      {club.participants >= club.maxParticipants ? 'Full' : 'Join Club'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleViewMembers(club)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredClubs.length === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No clubs found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria or check back later for new clubs.</p>
          </CardContent>
        </Card>
      )}

      {/* Dialogs */}
      <ClubJoinDialog
        isOpen={isJoinDialogOpen}
        onClose={() => setIsJoinDialogOpen(false)}
        club={selectedClub}
        onJoin={handleClubJoin}
      />
      
      <ClubMembersDialog
        isOpen={isMembersDialogOpen}
        onClose={() => setIsMembersDialogOpen(false)}
        club={selectedClub}
      />
    </div>
  );
}