import javax.swing.*;

public class Aredshaw {
	public static void main(String[] args){
		JFrame f = new JFrame();//Creating an instance of JFrame
		f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		Portfolio a = new Portfolio();


		JTextArea textArea = new JTextArea(a.myPort());


		textArea.setLineWrap(true);
		textArea.setWrapStyleWord(true);
		textArea.setBounds(400, 400, 400, 300);//x axis, y axis, width, height
		textArea.setBorder(BorderFactory.createEmptyBorder(5, 5, 5, 5));//this gives padding between the text and the sides of the JFrame
		f.add(textArea);


		f.pack();

		f.setLocationRelativeTo(null);//this centers the window (JFrame)


		f.setSize(400, 500);//width and height
		f.setLayout(null);//no layout managers
		f.setVisible(true);//make JFrame visible

		
	}
}

class Portfolio {
	String myPort(){
		//port is where all the text of the portfolio is stored
		String port = "                           A a r o n  K.  R e d s h a w\n                Technical Writer / API Documentation\n\nSummary:\nI am currently writing API documentation for Google. I can document and read Java, Python, and Javascript, and am very comfortable with the Linux command-line.\n\nExpert Support (currently a temp at Google):\n- Created and improved API documentation to aid in new engineer onboarding, and to serve outside integrators.\n- Supplied a range of code samples for developers using Java, Javascript, JSON, and Linux command-line.\n- Increased productivity for engineers by planning and writing extensive documentation in Markdown, HTML, YAML, and Django.\n- Simplified collaboration by implementing a docs-as-code model throughout the documentation process.\n- Provided intuitive navigation and document placement, following a gap analysis and information architecture planning.\n- Worked on multiple projects simultaneously, prioritizing according to need, deadline, and SME input.\n- Collaborated with SMEs from a wide range of geographic locations and time zones.\n- Managed document changes and updates using a source control management system (SVM) similar to Git or Subversion.\n- Helped triage documentation needs by utilizing a bug tracking system, both submitting bugs and resolving them.\n\nSee my web portfolio at aaronkredshaw.com";
		return port;

	}
}
