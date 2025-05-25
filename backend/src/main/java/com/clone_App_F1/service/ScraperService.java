package com.clone_App_F1.service;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class ScraperService {
    public void scrapeDrivers() throws IOException {
        String url = "https://www.formula1.com/en/drivers.html";
        Document doc = Jsoup.connect(url).get();
        //Testing selectors will use the same as Mb in 'root\src\app\api'
        //but first need to analyze the webpage
        Elements drivers = doc.select(".driver-list .driver-item");

        for (Element driver : drivers) {
            String name = driver.select(".driver-name").text();
            String team = driver.select(".driver-team").text();
            //TODO print in console, but need to save in DB with DriverRepository
            System.out.println("Driver: " + name + " | Team: " + team);
        }
    }
}