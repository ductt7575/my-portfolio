import adobeaudition from "assets/svg/skills/adobeaudition.svg";
import angular from "assets/svg/skills/angular.svg";
import aws from "assets/svg/skills/aws.svg";
import azure from "assets/svg/skills/azure.svg";
import bootstrap from "assets/svg/skills/bootstrap.svg";
import canva from "assets/svg/skills/canva.svg";
import css from "assets/svg/skills/css.svg";
import deno from "assets/svg/skills/deno.svg";
import django from "assets/svg/skills/django.svg";
import docker from "assets/svg/skills/docker.svg";
import figma from "assets/svg/skills/figma.svg";
import firebase from "assets/svg/skills/firebase.svg";
import gimp from "assets/svg/skills/gimp.svg";
import git from "assets/svg/skills/git.svg";
import graphql from "assets/svg/skills/graphql.svg";
import html from "assets/svg/skills/html.svg";
import javascript from "assets/svg/skills/javascript.svg";
import materialui from "assets/svg/skills/materialui.svg";
import mongoDB from "assets/svg/skills/mongoDB.svg";
import mysql from "assets/svg/skills/mysql.svg";
import nextJS from "assets/svg/skills/nextJS.svg";
import nginx from "assets/svg/skills/nginx.svg";
import numpy from "assets/svg/skills/numpy.svg";
import nuxtJS from "assets/svg/skills/nuxtJS.svg";
import opencv from "assets/svg/skills/opencv.svg";
import php from "assets/svg/skills/php.svg";
import postgresql from "assets/svg/skills/postgresql.svg";
import premierepro from "assets/svg/skills/premierepro.svg";
import python from "assets/svg/skills/python.svg";
import pytorch from "assets/svg/skills/pytorch.svg";
import reactquery from "assets/svg/skills/react-query.svg";
import react from "assets/svg/skills/react.svg";
import ruby from "assets/svg/skills/ruby.svg";
import selenium from "assets/svg/skills/selenium.svg";
import shopify from "assets/svg/skills/shopify.svg";
import strapi from "assets/svg/skills/strapi.svg";
import swift from "assets/svg/skills/swift.svg";
import tailwind from "assets/svg/skills/tailwind.svg";
import tensorflow from "assets/svg/skills/tensorflow.svg";
import typescript from "assets/svg/skills/typescript.svg";
import vitejs from "assets/svg/skills/vitejs.svg";
import vue from "assets/svg/skills/vue.svg";
import vuetifyjs from "assets/svg/skills/vuetifyjs.svg";
import webix from "assets/svg/skills/webix.svg";
import wordpress from "assets/svg/skills/wordpress.svg";
import antd from "assets/svg/skills/ant-design.svg";

export const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case "shopify":
            return shopify;
        case "ant design":
            return antd;
        case "html":
            return html;
        case "docker":
            return docker;
        case "css":
            return css;
        case "angular":
            return angular;
        case "javascript":
            return javascript;
        case "next js":
            return nextJS;
        case "nuxt js":
            return nuxtJS;
        case "react":
            return react;
        case "react query":
            return reactquery;
        case "typescript":
            return typescript;
        case "vue":
            return vue;
        case "bootstrap":
            return bootstrap;
        case "mongodb":
            return mongoDB;
        case "mysql":
            return mysql;
        case "postgresql":
            return postgresql;
        case "tailwind":
            return tailwind;
        case "vitejs":
            return vitejs;
        case "vuetifyjs":
            return vuetifyjs;
        case "php":
            return php;
        case "python":
            return python;
        case "ruby":
            return ruby;
        case "swift":
            return swift;
        case "adobe audition":
            return adobeaudition;
        case "aws":
            return aws;
        case "deno":
            return deno;
        case "django":
            return django;
        case "firebase":
            return firebase;
        case "gimp":
            return gimp;
        case "git":
            return git;
        case "graphql":
            return graphql;
        case "materialui":
            return materialui;
        case "nginx":
            return nginx;
        case "numpy":
            return numpy;
        case "opencv":
            return opencv;
        case "premiere pro":
            return premierepro;
        case "pytorch":
            return pytorch;
        case "selenium":
            return selenium;
        case "strapi":
            return strapi;
        case "tensorflow":
            return tensorflow;
        case "webix":
            return webix;
        case "wordpress":
            return wordpress;
        case "azure":
            return azure;
        case "figma":
            return figma;
        case "canva":
            return canva;
        default:
            break;
    }
};
