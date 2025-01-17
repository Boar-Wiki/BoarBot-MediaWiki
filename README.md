# BoarBot Wiki

This is an unofficial temporary wiki for BoarBot until Weslay makes an official one

## Requirements

- PHP
- MySql

## Running

1) Create a database for the wiki in MySql
2) Enter your database info into the database section in LocalSettings-template.php
3) Rename the file to LocalSettings.php
4) Enter the MySql CLI with `mysql wiki -u user -p password` then run `source /path/to/data.sql`
5) Run `php -S localhost:8000`
6) go to the url localhost:8000

## Info

Before commiting, the command `mysqldump wiki -u user -p password > data.sql` must be run to update the database file on github.

After pulling from main, enter the MySql CLI with `mysql wiki -u user -p password` then run `source /path/to/data.sql` to update your local database.

# MediaWiki

MediaWiki is a free and open-source wiki software package written in PHP. It
serves as the platform for Wikipedia and the other Wikimedia projects, used
by hundreds of millions of people each month. MediaWiki is localised in over
350 languages and its reliability and robust feature set have earned it a large
and vibrant community of third-party users and developers.

MediaWiki is:

* feature-rich and extensible, both on-wiki and with hundreds of extensions;
* scalable and suitable for both small and large sites;
* simple to install, working on most hardware/software combinations; and
* available in your language.

For system requirements, installation, and upgrade details, see the files
RELEASE-NOTES, INSTALL, and UPGRADE.

* Ready to get started?
  * https://www.mediawiki.org/wiki/Special:MyLanguage/Download
* Setting up your local development environment?
  * https://www.mediawiki.org/wiki/Local_development_quickstart
* Looking for the technical manual?
  * https://www.mediawiki.org/wiki/Special:MyLanguage/Manual:Contents
* Seeking help from a person?
  * https://www.mediawiki.org/wiki/Special:MyLanguage/Communication
* Looking to file a bug report or a feature request?
  * https://bugs.mediawiki.org/
* Interested in helping out?
  * https://www.mediawiki.org/wiki/Special:MyLanguage/How_to_contribute

MediaWiki is the result of global collaboration and cooperation. The CREDITS
file lists technical contributors to the project. The COPYING file explains
MediaWiki's copyright and license (GNU General Public License, version 2 or
later). Many thanks to the Wikimedia community for testing and suggestions.
