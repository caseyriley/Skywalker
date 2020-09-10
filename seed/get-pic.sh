# usage : sh download.sh 100 
# will download 100 pics
START=1
for i in $(eval echo "{$START..$1}")
  do
    curl "http://lorempixel.com/index.php?generator=1&x=640&y=480&cat=" -o temp.html && cat temp.html | sed -n 's/.*<img src="\([^" ]*\)".*/\1/p' | awk '{print "http://lorempixel.com/"$1}' | xargs curl -o $i.jpg
done
