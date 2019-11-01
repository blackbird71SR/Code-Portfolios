import time

name = "Kimbelly Ferraz"
skills =["Python","Java","HTML","CSS","Javascript","Android","NodeJS","VueJS","ReactJS"]
email = "kimbelly_emanuelle@hotmail.com"
site = "kimbellyf.github.io"
mens = "Hi! My name is"+' ' + name +"." +" Welcome!"

print("")
print(mens)
time.sleep(1.4)
print("")
print("My skills are: ")
print("")
for i in (skills):
    print(i)

print("")
print("My contact:  \n Site: %s \n Email: %s" %(site,email))


