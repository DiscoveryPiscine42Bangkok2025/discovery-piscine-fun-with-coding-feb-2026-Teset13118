if [ $# -eq 0 ]; then
  echo "No arguments supplied"
else
  count=0
  for i in "$@"; do
    echo "$i"
    count=$((count+1))
    [ $count -eq 3 ] && break
  done
fi