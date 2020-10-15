# Make an AWESOME poster out of your git logs

How to make your own poster from your git logs. Use the first option if you don't have any tools installed.

![](.github/poster_example_small.png)

## I don't have any tools, can I run it in my browser?

Yes! You can use the p5.js editor!

1. Start by browing the sample code here: https://editor.p5js.org/haschdl/sketches/LGhwnphKN

* Use the Play button to run the sketch. 

    ![](.github/2020-10-15-12-29-14.png)

* See the output from the right side.
* Start tweaking the code for changes! Color, sizes etc. Break it until you like it :)

2. Now it is time to use your own data. 
Export your git logs to a CSV so that you have just two columns: Date, Number of Commits.
The name of the columns doesn't matter, but the code expects the date to be in the format YYYY-MM-DD. 
Check the sample file [commits_per_day.csv](/p5js/gitlogposter/data/commits_per_day.csv)
A few tips to get you start:
     https://stackoverflow.com/questions/35769003/git-commit-count-a-day/48329147

If you run Linux or Mac, this does 80% of the job. In the command line, make sure you are at the repo folder. 
Run the command below, then copy and paste to Excel to format the columns.  
If you are more versed with scripting, you can probably do it all in the command line without having the manual steps. 

```Bash
git log --date=short --pretty=format:%ad | sort | uniq -c
```

If you run Windows, you can use the exact same command in the Git Bash. Browse to your rep

## I have development tools installed in my computer, such as VS Code

1. Export your git logs to a CSV so that you have just two columns: Date, Number of Commits.
The name of the columns doesn't matter, but the code expects the date to be in the format YYYY-MM-DD.

2. Save the data to the file `/data/commits_per_day.csv`

3. Open index.html using a web-server. I use the add-on [Live-Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and righ-click,  Open with Live Server.





Presented during Data Innovation Summit 2020.
