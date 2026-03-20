# Business Application Studio configuration

Configure a development space and start a project in BAS.

## You will learn

- How to set up SAP Business Application Studio
- How to clone a GitHub repository
- How locally test your applications

## Create development space

On the SAP Business Application Studio start page, click Create Dev Space.

On the following page, enter a name for your new development space and choose the application type Full Stack Cloud Application from the list.

Click **Create Dev Space**.

![alt text](images/bas-config/image-12.png)

Your development space is now ready to use. Wait until the status has changed from `STARTING` to `RUNNING`. After the initial creation this is done automatically.

In case your development space was stopped, you can restart it by clicking the start button (for example after a longer idle time).

Open the development space by clicking on its name.

## Clone the demo service

Once you are in the development space, you will see a Welcome page from which you can create the application project.

Copy your GitHub repository URL into your clipboard. The project cloned from https://github.com/mauriciolauffer/btpdevops.git

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

From the hamburger menu select **Terminal** and then **New Terminal**.

Ensure that your terminal prompt shows the root folder of your project. At the terminal prompt, enter `npm install` and press **Enter**. This command will download and install all necessary modules from the npm package repository required to run the application.

![alt text](images/bas-config/image-19.png)

## Local testing

At the terminal prompt, enter `npm start`.

![alt text](images/bas-config/image-20.png)

Click on **Open in a new tab** button. You will see the application running. You can explore the services clicking on the links.

![alt text](images/bas-config/image-30.png)

Click on `/odata/v4/admin/` `$metadata` in **Service Endpoints** to see the OData service metadata.

![alt text](images/bas-config/image-31.png)

Click on `/odata/v4/admin/` `Authors` in **Service Endpoints** to see the entity data.

![alt text](images/bas-config/image-32.png)

You now know the application works.
