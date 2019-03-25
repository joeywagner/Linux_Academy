#!/usr/bin/env bash

action=$1
if (( $# == 0 ))
then
        echo "Commands for the script"
        echo "showdb - lists databases on the mysql system"
        echo "create - creates users and databaes based off /etc/passwd"
        echo "delete - drops and deletes users/databases"
        echo "showusers - shows listed users in database"
        exit 0
fi

function create_mysql_users{

       for user in  `cut -d: -f1 /etc/passwd | egrep -v "^(root|mysql|information_schema|performance_schema)"`
       do
            echo create $user | mysql
            echo create database $user | mysql
       done

}

function delete_mysql_users {
        for user in  `cut -d: -f1 /etc/passwd | egrep -v "^(root|mysql|information_schema|performance_schema)"`
        do
            echo drop $user | mysql
            echo drop database $user | mysql
        done
}

function show_databases{
        echo show databases | mysql

}

function show_mysql_users{
       echo select user from mysql.user | mysql
}

case $action in
        showdb)
            show_databases
            ;;
        create)
            create_mysql_users
            ;;
        delete)
                delete_mysql_users
            ;;
        showusers)
                show_mysql_users
            ;;
        *)
                echo "wrong try again"
esac
