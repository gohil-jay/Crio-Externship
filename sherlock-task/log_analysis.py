#Accessing and analysing text file - Log.txt

file = open("logs.txt","r")
x = [] #To store all lines
y = [] #To store all elements of line seperately
z = [] #To store all IP addresses

#Repeat for each song in the text file
for line in file:
  
  #Let's split the line into an array called "fields" using the ";" as a separator:
  fields = line.split(";")
  x.append(fields)

for i in x:
    abc = i[0].split(",") #splitting the line seperated by ','
    y.append(abc) #adding the elements into the array
    
for j in y:
    z.append(j[2]) #extracting and storing all IP addresses

unique = list(set(z)) #creating a unique array with all IP addresses occuring only once.
print("The total number of unique IDs :", len(unique))

#closing the file...
file.close()
