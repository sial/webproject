package com.webproject;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class DataController {

    private static final Logger LOG = Logger.getLogger(DataController.class);

    @RequestMapping("/")
    public String index() {
        LOG.warn("Return index");
        return "index.html";
    }
}
