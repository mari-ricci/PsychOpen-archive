# PsychOpen Archive for EJCOP, PCH, PSYCT journals

## Sitemap
```bash
└── Home (index.html)
    ├── European Journal of Counselling Psychology (ejcop.html)
    ├── Psychology, Community and Health (pch.html)
    └── Psychological Thought (psyct.html)
```
## Journal page
A Journal page contain a listing of all articles of the journal, divided in Volumes and Sections.
The general structure of the listing is
```bash
(H2) [id-volume]  Volume x, N°y, YEAR
(H3) [id-section] Section title
(H4) [id-article] Article title                       (page-no) page number
(author)          Author names
(psycharchive     link to PsychArchive article        (doi)     DOI link
(abstract)        Abstract
```
An example of how a journal page looks like can be found in `journal_mockup.html`.

## How to add articles
- For every Issue, enter the Volume number, the Issue number, and the year. Add an unique id.
- For every Section of the Issue, enter the Section title. Add an unique id.
- For every article in the Section, enter 
    - the title `<h4 id="" class="title">`here`</h4>`
    - the author names `<div class="author">`here`</div>`
    - the page number `<div class="col-2 page-no">`here`</div>`
    - the link to the article in PsychArchives `<a href="`here`" ...>Fulltext in PsychArchives</a>`
    - the DOI link `<div class="col doi"><a href=`"here"`>`and here`</a></div>`
    - the abstract text `<p class="abstract-content">`here`</p>`
    - change the abstract ID
      - in the abstract content `<div id="ID" class="collapse">`
      - in the Abstract button
```bash
<div class="col-2 btn-abstract">
    <a href="#" type="button" data-toggle="collapse" data-target="#ID"
    aria-expanded="false" aria-controls="ID" class="collapsed">Abstract <i class="fa fa-xs" aria-hidden="true"></i>
    </a>
</div>
```
          
The `ID`s of Volume, Section and Article must be unique and specified in the `<h*>` tag with `id=""`. These are used to make the table of contents on the right.