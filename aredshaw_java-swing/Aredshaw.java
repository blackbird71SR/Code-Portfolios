 
import javax.swing.JEditorPane;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.WindowConstants;
import javax.swing.event.HyperlinkEvent;
import javax.swing.event.HyperlinkListener;
 
 
//Here lies a working scrollbar
public class Aredshaw {
  public static void main(String args[]) {
 
      final JFrame f = new JFrame();
      f.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
      f.setTitle("JEditorPane Test");
 
      final String text = "<center><h1>Aaron K. Redshaw</h1></center>\n"
          + "<center><p><strong>Technical Writer – Developer Docs / APIs</strong></p></center>\n"
          + "<p>211 Bean Creek Rd. #12, Scotts Valley, CA 95066       Portfolio: <a href=\"https://aaronkredshaw.com\">https://aaronkredshaw.com</a></p>\n"
          + "<p>E-mail: akredshaw@gmail.com      GitHub Profile: <a href=\"https://github.com/aredshaw\">https://github.com/aredshaw</a></p>\n"
          + "<p>831-419-5296      LinkedIn: <a href=\"https://www.linkedin.com/in/aaron-redshaw/\">https://www.linkedin.com/in/aaron-redshaw/</a></p>\n"
          + "<p><h1>Summary of Skills</h1></p>\n"
          + "<ul>\n"
          + "<li>Project manager, as well as writer, for all developer documentation.</li>\n"
          + "<li>REST APIs (including OpenAPI / Swagger), gRPC, GraphQL, and Library APIs.</li>\n"
          + "<li>Integrate code into documentation (Java, Python, JavaScript, command-line scripts, etc.).</li>\n"
          + "<li>Personally write code in <a href=\"https://github.com/aredshaw/CodePractice\">Java, Python, and JavaScript</a>.</li>\n"
          + "<li>Linux, both desktop and command-line.</li>\n"
          + "<li>HTML and markdown.</li>\n"
          + "<li>Information architecture, writing proposals, gap analyses, and other planning docs.</li>\n"
          + "<li>Source control management, bug tracking, and other development tools.</li>\n"
          + "<li>Creating and revising UML sequence diagrams.</li>\n"
          + "<li>Static site generators (Hugo).</li>\n"
          + "</ul>\n"
          + "<p><h1>Employment History</h1></p>\n"
          + "<p><h2>Technical Writer – Expert Support (Placed at Google)      03/2019– Present</h2></p>\n"
          + "<p><strong>Area: Engineering - Payments Central T/PgM</strong></p>\n"
          + "<p><strong>Google Projects I managed (a selection)</strong></p>\n"
          + "<p><a href=\"https://developers.google.com/standard-payments\"><strong>Google Standard Payments</strong></a> (Developer docs and APIs) - Audience: Internal and external developers.</p>\n"
          + "<ul>\n"
          + "<li>Concepts section redone:</li>\n"
          + "<ul>\n"
          + "<li>Revised sequence diagrams and created new ones (<a href=\"https://www.lucidchart.com/\">Lucidchart</a>), </li>\n"
          + "<li>Diagrams explained step-by-step with method links (tokenized, cash, card). </li>\n"
          + "</ul>\n"
          + "<li>Guide section added: </li>\n"
          + "<ul>\n"
          + "<li>Authentication</li>\n"
          + "<li>Authorization</li>\n"
          + "<li>Encryption requirements</li>\n"
          + "<li>Testing</li>\n"
          + "<li>Launch process</li>\n"
          + "</ul>\n"
          + "</ul>\n"
          + "<p><strong>Payments reporting</strong> - Audience: Internal for Payments. A reference site for their department. </p>\n"
          + "<ul>\n"
          + "<li>Greatly revised and rewrote much of this documentation.</li>\n"
          + "<li>Restructured site, including navigation and theme.</li>\n"
          + "<li>Improved ease of use and efficiency for locating relevant information.</li>\n"
          + "</ul>\n"
          + "<p><strong>App Rewards</strong> (Developer docs and Java library API, SDK documentation) - Audience: External developers (whitelisted). This was a collaborative project with two other technical writers.</p>\n"
          + "<ul>\n"
          + "<li>Created landing page, changed navigation (YAML), added pages, modified content, added content to pages, added variable names and variable paths for easy versioning. </li>\n"
          + "</ul>\n"
          + "<p><strong>Payments 911</strong> - Audience: SRE (Site Reliability Engineers). A reference site for their department.</p>\n"
          + "<ul>\n"
          + "<li>Rewrote existing docs for a fast reference. </li>\n"
          + "<li>Reorganized and consolidated content, and increased readability. </li>\n"
          + "<li>Improved navigation and ease of use.</li>\n"
          + "</ul>\n"
          + "<p><a href=\"https://developers.google.com/pay/india/spot\"><strong>Google Pay Spot</strong></a> (Developer docs and APIs) - Audience: Internal and external developers. </p>\n"
          + "<ul>\n"
          + "<li>Created original draft of landing page.</li>\n"
          + "<li>Helped revise and restructure the FAQ page.</li>\n"
          + "</ul>\n"
          + "<p><strong>Payments Integration Experience</strong> (Developer docs and APIs) - Audience: Internal developers (soon to be external as well). </p>\n"
          + "<ul>\n"
          + "<li>Created gap analysis, site proposal, and extensive notes used by the team (over 40 pages of planning documents).</li>\n"
          + "<li>Contributed insights in numerous cross-disciplinary team meetings.</li>\n"
          + "</ul>\n"
          + "<p><h2>Technical Writer - <a href=\"http://www.clyste.com\"><strong>Clyste </a>     08/2018 – 02/2019</h2><strong><br /></strong>A user owned, governed, and developed blockchain based social media, app store, and ERP.</p>\n"
          + "<ul>\n"
          + "<li>Wrote a <a href=\"https://aaronkredshaw.com/white-paper/\">technical white paper</a> to increase visibility. </li>\n"
          + "<ul>\n"
          + "<li>Interviewing SMEs, exhaustive research, and incorporating stakeholder feedback.</li>\n"
          + "</ul>\n"
          + "<li>Created a tri-fold marketing pamphlet.</li>\n"
          + "</ul>\n"
          + "<p><h2>English Teacher - Independence H.S., San Jose, CA      08/2003 – 08/2018</h2></p>\n"
          + "<ul>\n"
          + "<li>Taught writing and critical thinking skills (mostly 9th and 12th graders).</li>\n"
          + "<li>Collaborated on STEAM (Science Technology Engineering Art & Math) Academy for the last five years, helping students pursue a future in engineering, technology, and science.</li>\n"
          + "</ul>\n"
          + "<p><h2>Technical Support - Verio-WebCom, Santa Cruz, CA      07/1999 – 09/2002</h2></p>\n"
          + "<ul>\n"
          + "<li>Email and phone technical assistance for customers setting up web and commerce sites.</li>\n"
          + "<li>Promoted to Hostmaster / Ordermaster to resolve domain name and server issues.</li>\n"
          + "<li>Used SSH, SSL, TCP/IP, SMTP, POP, FTP, SCP regularly. Ran SQL queries daily.</li>\n"
          + "<li>Took a Perl class on weeknights for use with web development.</li>\n"
          + "<li>Learned Java and created an open source program (DebtPayoff).</li>\n"
          + "<li>Took initiative by converting my workstation to Linux, becoming comfortable with command line and GUI tools, and improving work efficiency.</li>\n"
          + "</ul>\n"
          + "<p><h1>Education</h1></p>\n"
          + "<p><strong>Teaching Credential with CLAD, San Jose State University, San Jose, CA</strong> <strong>2002 – 2003</strong></p>\n"
          + "<ul>\n"
          + "<li>Finished credential while concurrently teaching high school full-time</li>\n"
          + "</ul>\n"
          + "<p><strong>B.A. English, Bethany College, Scotts Valley, CA</strong> <strong>1993 – 1996</strong></p>\n"
          + "<ul>\n"
          + "<li>Graduated Summa Cum Laude, 3.93 GPA</li>\n"
          + "</ul>";
 
      final JEditorPane ep = new JEditorPane();
      ep.setContentType("text/html");
      ep.setText(text);
      ep.setEditable(false);
      ep.addHyperlinkListener(new HyperlinkListener() {
        @Override public void hyperlinkUpdate(final HyperlinkEvent pE) {
          if (HyperlinkEvent.EventType.ACTIVATED == pE.getEventType()) {
            System.out.println("JEditorPane link click: url='" + pE.getURL() + "' description='" + pE.getDescription() + "'");
            String reference = pE.getDescription();
            if (reference != null && reference.startsWith("#")) { // link must start with # to be internal reference
              reference = reference.substring(1);
              ep.scrollToReference(reference);
            }
          }
        }
      });
 
      final JScrollPane sp = new JScrollPane(ep);
      f.add(sp);
 
      f.setBounds(200, 200, 800, 1000);
      f.setVisible(true);
      f.setLocationRelativeTo(null);//this centers the window (JFrame)
    }
  }
 
