
import tkinter as tk
from tkinter.font import Font

root = tk.Tk()

T = tk.Text(root, font = 'Times 12', height = 10, width = 60, padx=10)
root.resizable(False, False)
T.pack()

T.configure(state='normal')


resume = "                                    Chirag Jain\nA passionate coder who want to explore each and every thing related to tech\n                                    My Portfolio\n\nSummary:\n-I am currently learning Flutter. \n-I can work in basic C, C++, Java, Python, and Javascript.\n-I am a little bit comfortable with the Linux command-line.\n-I am very comfortable in handlling Git, Github and Version Controlling\n"
T.insert(tk.END, resume)
T.config(state='disabled', wrap='word')
tk.mainloop()