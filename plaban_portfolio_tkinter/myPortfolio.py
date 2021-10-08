from tkinter import *
from tkinter import ttk

root = Tk()
root.title("Plaban's Portfolio")
root.geometry("1024x576")

intro_label = Label(root, text="Hello I am Plaban Kumar Mondal! I am a first year CSE student at VIT Bhopal. I love coding.", padx=100)
skill_label = Label(root, text="I know Python, Javascript, HTML, CSS, ReactJs")

intro_label.pack()
skill_label.pack()

root.mainloop()