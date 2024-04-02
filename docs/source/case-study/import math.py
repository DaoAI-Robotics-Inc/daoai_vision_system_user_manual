import math
# this script removes "Calculated" rows and output the result to a file.

# parameters:
# input and output filename

filename = "C:\\Users\\zhang\\Desktop\\in_hand+string+.csv"
outfile =  filename[0:-4] + "_Cleaned.csv"

# please select a mode from ["xyz", "rz"]
mode = "xyz"
repeat = 32
#############################

f = open(filename, "r")
newDoc = ""

for line in f:
    lineList = line.split(",")
    if lineList[0] == "Calculated: ":
        continue
    newDoc += line

f.close()

f = open(outfile, "w")
f.write(newDoc)
f.close()


# process
f = open(outfile, "r")

newDoc = ""

def error(a, b, c):
    ab = (a**2 + b**2)**(1/2)
    return (ab**2 + c**2)**(1/2)

i = 1
angle=0
for line in f:
    
    lineList = line.split(",")
    if lineList[0] == "Robot movement from center: ":
        robot_move_x = lineList[1]
        robot_move_y = lineList[2]
        robot_move_z = lineList[3]
        robot_move_rx = lineList[4]
        robot_move_ry = lineList[5]
        robot_move_rz = lineList[6]
        tiltMode = False

    if lineList[0] == "difference":
        i+=1
        modes = ["xyz", "rz"]
        if (mode == modes[0]):
            movement_x = round(float(robot_move_x), -1)
            movement_y = round(float(robot_move_y), -1)
            movement_z = round(float(robot_move_z), -1)

            movement = error(movement_x,movement_y,movement_z)
        elif (mode == modes[1]):
            movement = angle
            if (i == repeat):
                i = 0
                angle+=10


        err = error(float(lineList[1]), float(lineList[2]), float(lineList[3]))
        line = line[:-1] + ","+str(movement)+ "," +str(err) + "\n"
        print(line)
        
    newDoc += line
f.close()


f = open(outfile, "w")
f.write(newDoc)
f.close()
