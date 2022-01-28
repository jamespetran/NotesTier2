```heroku create```

```git push heroku master```

```heroku open```

```heroku logs --tail```

// heroku needs your api-key
// go into app - settings - config vars   <- these are environment variables / GIPHY_API_KEY=$#TQRFEAVDH%$TEW / put this in there
//
// its DATABASE TIME!!!

```heroku addons:create heroku-postgresql:hobby-dev```
```heroku pg:push the_actual_name_of_your_database DATABASE_URL```

https://github.com/PrimeAcademy/woodall-syllabus/blob/master/lecture-notes/week-10-react-props/10-01_heroku-sql.md
