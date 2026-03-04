# Create development space

On the SAP Business Application Studio start page, click Create Dev Space.

On the following page, enter a name for your new development space and choose the application type Full Stack Cloud Application from the list.

Click **Create Dev Space**.

![alt text](images/bas-config/image-12.png)

Your development space is now ready to use. Wait until the status has changed from `STARTING` to `RUNNING`. After the initial creation this is done automatically.

In case your development space was stopped, you can restart it by clicking the start button (for example after a longer idle time).

Open the development space by clicking on its name.

## Clone the demo service

Once you are in the development space, you will see a Welcome page from which you can create the application project.

Copy the following GitHub repository URL into your clipboard:

https://github.com/mauriciolauffer/btpdevops.git

Click the link **Clone from Git**.

![alt text](images/bas-config/image-13.png)

Paste the repository link into the input field and press Enter.

![alt text](images/bas-config/image-15.png)

Wait until the cloning has finished. Click **Open** to open the project.

![alt text](images/bas-config/image-16.png)

You see your project in the explorer panel as shown in the image below:

![alt text](images/bas-config/image-17.png)

Your development environment is now ready.

## Complete the service

From the hamburger menu select **Terminal** and then **New Terminal**

Ensure that your terminal prompt shows `btpdevops`. At the terminal prompt, enter `npm install` and press **Enter**. This command will download and install all necessary modules from the npm package repository required to run the application.

![alt text](images/bas-config/image-19.png)

## Local testing

At the terminal prompt, enter `npm start`.

![alt text](images/bas-config/image-20.png)

Click on **Open in a new tab** button. You will see the application running.

Click on `/fiori-apps.html` in **Web Applications**.

![alt text](images/bas-config/image-21.png)

Click on the **Manage Authors** tile.

![alt text](images/bas-config/image-22.png)

Click on the **Create** button.

![alt text](images/bas-config/image-23.png)

Enter the information to create a new author. Then, click on the **Create** button.

![alt text](images/bas-config/image-24.png)
