---
layout: article
category: tech,article
---

# My First Web Server
Today, I did something that I had always found confusing and scary -- 
I configured my first web server! In doing so, I
uncloaked the shrowd of mystery behind a bunch of concepts and terms I had heard
people talking about for years, like:

* Amazon Web Services (AWS)
* Wordpress
* Apache
* LAMP (Linux, Apache, Mysql, PHP)

## Inspiration
I just got my B.S., and I'm about to spend the year freelancing -- that means I'm
going to be expected to be a bit of a jack of all trades, having a working
knowledge of a wide variety of things. Web development is one of the most sought
after skills in the freelance world, and I wanted to figure out how to put the
pieces together.

## Background
I have enough understanding of CSS and HTML to make this site. I have used web
frameworks like Jekyll, and hacked on other web frameworks like Ruby on Rails
through my work on projects like [The Jolly Advisor](advise.case.edu). In all of
these cases, the infrastructure has already been prepared for me. I didn't have
to deploy or manage servers for The Jolly Advisor, and github manages all of the
nitty-gritty for this website without me having to lift a finger. This project
takes off the training wheels.

## Goals
To orient myself to the 'back end' of making a website, I decided I would:

* Install Wordpress onto a server
* Make some basic changes to the default website
* Use AWS to do the above

By choosing Wordpress and AWS, I not only get at my core goal of comprehending
the website building process, but I also have a chance to finally taste
these two technologies I'm always hearing about.

## Process
I picked out relevant sections from some tutorials to [install
wordpress](https://codex.wordpress.org/Installing_WordPress), and
[configure](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04)
my
[host](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04).

I looked into some free domain names just to get a handle on that process, but I
eventually gave up the search. I found a few that were free for 12 months, and
required a fee after that, but none were completely free. I figured that I could
worry about that as my last step.

That aside, I began by setting up AWS. I went to [https://aws.amazon.com](aws.amazon.com)
and signed up for a basic (read: free) account. I also redeemed some AWS credit
that is provided for university students. I determined that to host a website, I
wanted to create an EC2 instance, so I went through the steps of creating one.

Amazon provides a number of 'images' for their EC2 instances, which all come
prebundled with different software and specs. Although [there is a wordpress
image available](https://aws.amazon.com/marketplace/pp/B00NN8Y43U), for the sake
of the aforementioned training wheels, I chose a vanilla Ubuntu image.

From there, it was some frantic googling and troubleshooting. I installed PHP
and MariaDB (the P and M[^1] of LAMP). I installed Apache, downloaded wordpress,
and figured out where to drop the wordpress folder so apache would serve it. In
this step, I consulted tutorials and googled a bunch to figure out what to do,
where to put things, what data to enter where, and how to fix bugs when they
arose.

## Outcome
I did it! You can find the barely-modified wordpress template at the following
catchy, easy to remember url: [ec2-13-58-11-150.us-east-2.compute.amazonaws.com](http://ec2-13-58-11-150.us-east-2.compute.amazonaws.com)
I would guess that it took me about 5, maybe 6 hours total to get that all set
up. When making sure things were all working, I tried to install a new theme to
the site, and was asked about my ftp credentials. Well, I didn't set up any ftp
client, so I didn't know what to do! I burned a couple of hours trying to set up
some virtual users with vsftp, and eventually gave up and found success by just
doing a `chmod 777 /var/www/html`. I'm not proud of it, but it worked! And now
I've learned something cool!

[^1]: In fact, the M stands for Mysql, but since MariaDB also starts with an M, and is supposedly [a drop-in replacement for Mysql](https://mariadb.com/kb/en/mariadb/mariadb-vs-mysql-compatibility/), I can justify saying it the way I did.
