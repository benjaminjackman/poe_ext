#run with make -j to do continuous compiling of the coffee script source
#http://www.opussoftware.com/tutorial/TutMakefile.htm

COFFEE_IN = ./app/coffee
COFFEE_OUT = ./app/js/coffee-out

SASS_IN = ./app/sass
SASS_OUT = ./app/css/sass-out


#all: coffee sass
all: coffee

coffee:
	echo Compiling Coffee
	coffee -cwo $(COFFEE_OUT) $(COFFEE_IN)

#sass:
#echo Compiling Sass
#	sass --watch $(SASS_IN):$(SASS_OUT)
